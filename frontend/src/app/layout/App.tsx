import { QueryClientProvider } from "@tanstack/react-query"

import { MainPage } from "../../pages/main-page"

import { queryClient } from "../../shared/api/query-client"

const App = () => {

  return (
    <QueryClientProvider client={queryClient}>
      <MainPage />
    </QueryClientProvider>
  )
}

export default App
