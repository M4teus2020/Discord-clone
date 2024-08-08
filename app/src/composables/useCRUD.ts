import { reactive, ref } from 'vue'
import api from '@/services/api'
import { AxiosError } from 'axios'

interface ValidationError {
  errors: Record<string, string[]>
  message: string
}

type Errors<T> = {
  [K in keyof T]?: string
}

export function useCRUD<T extends object = object, R = T>(endpoint: string) {
  const form = reactive<T>({} as T)
  const errors = reactive<Errors<T>>({})
  const isLoading = ref(false)
  const errorMessage = ref('')

  function resetErrors() {
    for (const key in errors) {
      // @ts-expect-error - just works
      delete errors[key]
    }

    errorMessage.value = ''
  }

  function setErrors(values: Errors<T> = {}, message: string = ''): void {
    resetErrors()
    Object.assign(errors, values)

    errorMessage.value = message
  }

  function resetForm() {
    for (const key in errors) {
      // @ts-expect-error - just works
      delete errors[key]
    }
  }

  function setForm(value: T) {
    resetForm()
    Object.assign(form, value)
  }

  function reset(): void {
    resetErrors()
    resetForm()
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  function handleError(error: any): void {
    if (error.isAxiosError) {
      const axiosError = error as AxiosError
      if (axiosError.response && axiosError.response.status === 422) {
        const data = axiosError.response.data as ValidationError
        Object.assign(errors, data.errors)
        errorMessage.value = data.message
      } else if (axiosError.response && axiosError.response.status === 401) {
        errorMessage.value = 'Credenciais inválidas'
      } else {
        errorMessage.value = 'Algo deu errado. Tente novamente mais tarde.'
      }
    } else {
      errorMessage.value = 'Algo deu errado. Tente novamente mais tarde.'
    }
  }

  async function create(): Promise<R> {
    isLoading.value = true
    setErrors()

    try {
      const response = await api.post<R>(endpoint, form)
      return response.data
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      handleError(error)
      throw error
    } finally {
      isLoading.value = false
    }
  }

  //   async function read(id?: string | number) {
  //     isLoading.value = true
  //     errorMessage.value = ''
  //     try {
  //       const url = id ? `${endpoint}/${id}` : endpoint
  //       const response = await api.get<T | T[]>(url)

  //       return response.data
  //     } catch (error: any) {
  //       handleError(error)
  //       throw error
  //     } finally {
  //       isLoading.value = false
  //     }
  //   }

  //   async function update(id: string | number) {
  //     isLoading.value = true
  //     errors.value = {}
  //     errorMessage.value = ''
  //     try {
  //       const response = await api.put<T>(`${endpoint}/${id}`, form.value)
  //       return response.data
  //     } catch (error: any) {
  //       handleError(error)
  //       throw error
  //     } finally {
  //       isLoading.value = false
  //     }
  //   }

  //   async function remove(id: string | number) {
  //     isLoading.value = true
  //     errorMessage.value = ''
  //     try {
  //       const response = await api.delete<R>(`${endpoint}/${id}`)
  //       return response.data
  //     } catch (error: any) {
  //       handleError(error)
  //       throw error
  //     } finally {
  //       isLoading.value = false
  //     }
  //   }

  return {
    get isLoading() {
      return isLoading.value
    },
    get errorMessage() {
      return errorMessage.value
    },

    form,
    errors,

    create,
    // read,
    // update,
    // remove

    setForm,
    resetForm,

    setErrors,
    resetErrors,

    reset
  }
}
