import api from '../api'
import localStorage from 'react-native-sync-localstorage'

//Gets News for a Admin
export const GetGallery = async(callback)=>{
    try {
        const response = await api.get(`tenant/${localStorage.getItem('org_name')}/tenant/extras/galleryview/`)
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


//Uploads News for a Admin
export const UploadNews = async(callback, data)=>{
    console.log(data)
    try {
    console.log(data)

        const response = await api.post(`tenant/${localStorage.getItem('org_name')}/tenant/news/newsview/`,data)
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
