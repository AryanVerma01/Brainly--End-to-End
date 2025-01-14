import { createRoot } from 'react-dom/client'
import App from './App'
import { RecoilRoot } from 'recoil'

createRoot(document.getElementById('root')!).render(
    <RecoilRoot>
      <App />
    </RecoilRoot>
)
