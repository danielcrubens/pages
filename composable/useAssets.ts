import { ref, computed } from 'vue'
import { useRuntimeConfig, useRoute } from 'nuxt/app'

export const useAssets = (path: string) => {
  const config = useRuntimeConfig()
  const route = useRoute()
  
  // Remove leading slash if exists
  const cleanPath = path.startsWith('/') ? path.slice(1) : path
  
  // Get base URL from runtime config
  const baseURL = computed(() => {
    const publicBase = config.app?.baseURL || '/'
    return publicBase.endsWith('/') ? publicBase : `${publicBase}/`
  })
  
  // Handle different environment cases
  const isDev = process.env.NODE_ENV === 'development'
  const isPreview = process.env.NODE_ENV === 'preview'
  
  // Compute the full asset URL
  const assetUrl = computed(() => {
    if (isDev || isPreview) {
      // For development and preview environments
      return `/${cleanPath}`
    } else {
      // For production environment
      return `${baseURL.value}${cleanPath}`
    }
  })
  
  // Function to check if asset exists
  const checkAssetExists = async () => {
    try {
      const response = await fetch(assetUrl.value, { method: 'HEAD' })
      return response.ok
    } catch (error) {
      console.error(`Error checking asset existence: ${error}`)
      return false
    }
  }
  
  // Error handling
  const error = ref<string | null>(null)
  
  // Validate asset path
  if (!cleanPath) {
    error.value = 'Asset path is required'
  }
  
  return {
    url: assetUrl,
    error,
    checkExists: checkAssetExists,
    isDevEnvironment: isDev,
    baseURL: baseURL
  }
}

export default useAssets