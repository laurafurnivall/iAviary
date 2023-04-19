import { AdminViews } from "./AdminViews"
import { UserViews } from "./UserViews"

export const ApplicationViews = () => {
    const localAviaryUser = localStorage.getItem("aviary_user")
    const aviaryUserObject = JSON.parse(localAviaryUser)
    if (aviaryUserObject.admin) {
        return <AdminViews />
    } else {
        return <UserViews />
    }
}