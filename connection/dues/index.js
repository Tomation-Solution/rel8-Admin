import api from '../api'
import localStorage from 'react-native-sync-localstorage'

//Gets Dues for a Admin
export const GetDues = async(callback)=>{
    try {
        const response = await api.get(`tenant/${localStorage.getItem('org_name')}/tenant/dues/AdminManageDue/due_list_and_owning_members/`)
    //    con
        if (response.status==200) {
            // console.log(response)
            callback(response);
        } else {
            console.log(response.status)
        //   console.log(response.data.statusText)
          alert(response.status)
        //   callback(response)
        }
    } catch (error) {
        console.error(error)
        // console.log(error.response.detail)
        alert(error)
        // setLoading(false)

    }
}


//Create Normal Due by an Admin
export const CreateNormalDue = async(callback, data)=>{
    // console.log(data)
    try {
    // console.log(data)

        const response = await api.post(`tenant/${localStorage.getItem('org_name')}/tenant/dues/AdminManageDue/`,data)
    //    con
        if (response.status==200) {
            // console.log(response)
            callback(response);
        } else {
            console.log(response.status)
        //   console.log(response.data.statusText)
          alert(response.message)
        //   callback(response)
        }
    } catch (error) {
        console.error(error)
        // console.log(error.response.detail)
        alert(error)
        // setLoading(false)

    }
}


//CreatDelete Normal Due by an Admin
export const DeleteNormalDue = async(callback, id)=>{
    try {
        const response = await api.post(`tenant/${localStorage.getItem('org_name')}/tenant/dues/AdminManageDue/${id}/`)
        if (response.status==200) {
            // console.log(response)
            callback(response);
        } else {
            console.log(response.status)
        //   console.log(response.data.statusText)
          alert(response.message)
        //   callback(response)
        }
    } catch (error) {
        console.error(error)
        // console.log(error.response.detail)
        alert(error)
        // setLoading(false)

    }
}
