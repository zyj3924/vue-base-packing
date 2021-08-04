import { BZ_Post } from '../utils/request'

export const UserLogin = (param = {}) => BZ_Post(`/sys/login?username=${param.username}&password=${param.password}`)

export const UserLogout = (param = {}) => BZ_Post(`/logout?username=${param.username}`)
