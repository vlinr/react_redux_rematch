import { Models } from '@rematch/core'
import { login } from './login'
export interface RootModel extends Models {
    login: typeof login
}
export const models: RootModel = { 
    login
}