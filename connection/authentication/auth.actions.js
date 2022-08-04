import api from '../api'
import localStorage from 'react-native-sync-localstorage'

export const LoginUser = async(data, org,callback, setLoading)=>{
    console.log(data)
    try {
        const response = await api.post(`tenant/${org}/tenant/auth/login/`,data);
       
        if (response.status ==200) {
            // console.log(response.data)
            callback(response)
            setLoading(false)
            localStorage.setItem('token',response.data.token)
            localStorage.setItem('org_name',org)
            localStorage.setItem('email',data.email)
            localStorage.setItem('password',data.password)
            localStorage.setItem('user_type',response.data.user_type)

            // console.log(localStorage.getItem('token'))
            
            // const user= await api.get(`client/${org}/employee/?user__email=${data.email}`)
            // // const org= await api.get(`client/${org}/employee/?user__email=${data.email}`)
            // if(user.status==200){
            //     const org= await api.get(`client/${AsyncStorage.getItem('org_name')}/organisation/current/`)
            //     if(org.status=200){
            //         // console.log(org.data.company_logo)
            //         AsyncStorage.setItem('company_logo',org.data.company_logo)

            //     }
            //     console.log(user)
                // console.log(user.data.data.map(e=>e.corporate_level.uuid))

            //     if(user.data.data.map(e=>e.user.user_role)=='team_lead'){
            //         AsyncStorage.setItem('team_uuid',user.data.data.map(e=>e.corporate_level.uuid))
            //     }else{AsyncStorage.setItem('team_uuid',null)}
            //     AsyncStorage.setItem('user_role',user.data.data.map(e=>e.user.user_role))
            //     AsyncStorage.setItem('user_id',user.data.data.map(e=>e.user.user_id))
            //     AsyncStorage.setItem('uuid',user.data.data.map(e=>e.uuid))
            //     AsyncStorage.setItem('first_name', user.data.data.map(e=>e.user.first_name))
            //     AsyncStorage.setItem('last_name', user.data.data.map(e=>e.user.last_name))
            //     AsyncStorage.setItem('last_name', user.data.data.map(e=>e.user.last_name))
            //     AsyncStorage.setItem('email', user.data.data.map(e=>e.user.email))
            //     AsyncStorage.setItem('password', data.password)


            //     callback(response)
                
            // }
        
        } else {
        //   console.log(response.data)
          alert(response.message)
        //   callback(response.data)
        setLoading(false)
        }
    } catch (error) {
        console.error(error.message)
        // if(error.code)
        setLoading(false)
        if(error.message.includes('401')||error.message.includes('404')){
            alert('Invalid Login Details.')
        }else{
            // alert(error.response.data.errors[0].message)
        alert(error.message)
        // console.log(error.response.data.message)
        }
        // setLoading(false)reposn

    }
}

// tenant/{{shortName}}/tenant/news/getyournews/
//Gets News for a Member
export const GetNews = async(callback)=>{
    try {
        const response = await api.get(`tenant/${localStorage.getItem('org_name')}/tenant/news/getyournews/`)
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

// Like News
export const LikeDisLikeNews = async(data,callback)=>{
    try {
        const response = await api.post(`tenant/${localStorage.getItem('org_name')}/tenant/news/getyournews/`, data)
       
        if (response.status==200) {
            callback(response);
        } else {
        //   console.log(response.data.status)
          callback(response.data)
        }
    } catch (error) {
        console.error(error)
        // setLoading(false)

    }
}

//Get Publications
export const GetPublications = async(status,callback)=>{
    try {
        const response = await api.get(`tenant/${localStorage.getItem('org_name')}/tenant/publication/getyourpublication/`)
       
        if (response.status==200) {
            callback(response);
        } else {
        //   console.log(response.data.status)
          callback(response.data)
        }
    } catch (error) {
        console.error(error)
        // setLoading(false)

    }
}

// Like Publication
export const LikeDisLikePublication = async(data,callback)=>{
    try {
        const response = await api.post(`tenant/${localStorage.getItem('org_name')}/tenant/publication/getyourpublication/`, data)
       
        if (response.status==200) {
            callback(response);
        } else {
        //   console.log(response.data.status)
          callback(response.data)
        }
    } catch (error) {
        console.error(error)
        // setLoading(false)

    }
}


// Get Events
// /tenant/event/eventview/get_events/?is_chapter=true
export const GetEvents = async(status,callback)=>{
    try {
        const response = await api.get(`tenant/${localStorage.getItem('org_name')}/tenant/event/eventview/get_events/?is_chapter=true`)
       
        if (response.status==200) {
            callback(response);
        } else {
        //   console.log(response.data.status)
          callback(response.data)
        }
    } catch (error) {
        console.error(error)
        // setLoading(false)

    }
}

// /tenant/dues/AdminManageDue/due_list_and_owning_members/
// Get My Dues

export const GetMyDues = async(status,callback)=>{
    try {
        const response = await api.get(`tenant/${localStorage.getItem('org_name')}/tenant/dues/memberdue/`)
       
        if (response.status==200) {
            callback(response);
            // console.log(response)
        } else {
          console.log(response.data.status)
          callback(response.data)
        }
    } catch (error) {
        console.error(error)
        // setLoading(false)

    }
}

// /tenant/dues/AdminManageDue/due_list_and_owning_members/
// Get Gallery

export const GetGallery = async(status,callback)=>{
    try {
        const response = await api.get(`tenant/${localStorage.getItem('org_name')}/tenant/extras/galleryview/`)
       
        if (response.status==200) {
            callback(response);
        } else {
          console.log(response.status)
          callback(response.status)
        }
    } catch (error) {
        console.error(error)
        // setLoading(false)

    }
}


// /tenant/extras/ticketview/
// Generate Ticket
export const GenerateTicket = async(status,callback, data, showModal)=>{
    try {
        const response = await api.post(`tenant/${localStorage.getItem('org_name')}/tenant/extras/ticketview/`, data)
       
        if (response.status==201) {
            callback(response);
            // console.log(response)
        } else {
        //   console.log(response.status)
        //   callback(response.status)
            showModal(false)
        alert(response.status)
        }
    } catch (error) {
        showModal(false)
        alert(error.error)
        console.error(error)
        // setLoading(false)

    }
}

// /tenant/auth/ManageMemberValidation/
// Get Validation Fields
export const ValidationFields = async(callback, org_name, data)=>{
    try {
        const response = data ? await api.post(`tenant/${org_name}/tenant/auth/ManageMemberValidation/`, data)
        : await api.get(`tenant/${org_name}/tenant/auth/ManageMemberValidation/`)
       
        if (response.status==200) {
            callback(response);
            // console.log(response)
        } else {
        //   console.log(response.status)
        //   callback(response.status)
            // showModal(false)
        alert(response.message)
        }
    } catch (error) {
        // showModal(false)
        alert(error.message)
        console.error(error)
        // setLoading(false)

    }
}


// Create 

export const CreateUser = async(data, org_name,callback, setLoader)=>{
    // console.log(data)
    try {
        const response = await api.post(`tenant/${org_name}/tenant/auth/ManageMemberValidation/create_member/`, data)
       
        if (response.status==200) {
            callback(response)
            setLoader(false)
        } else {
            setLoader(false)
            alert(response)
          console.log(response)
        //   callback(response)
        }
    } catch (error) {
        setLoader(false)
        alert(error)
        console.error(error)
        // setLoading(false)
        console.log(error)

    }
}


// /tenant/faq/faq/members_view_faq/
//Get FAQ
export const GetFAQ = async(status,callback)=>{
    try {
        const response = await api.get(`tenant/${localStorage.getItem('org_name')}/tenant/faq/faq/members_view_faq/`)
       
        if (response.status==200) {
            callback(response);
        } else {
          console.log(response.status)
          callback(response.status)
        }
    } catch (error) {
        console.error(error)
        // setLoading(false)

    }
}

// user/memberlist-info/get_all_members/
//Get Members
export const GetMembers = async(status,callback)=>{
    try {
        const response = await api.get(`tenant/${localStorage.getItem('org_name')}/tenant/user/memberlist-info/get_all_members/`)
       
        if (response.status==200) {
            callback(response);
        } else {
          console.log(response.status)
          callback(response.status)
        }
    } catch (error) {
        console.error(error)
        // setLoading(false)

    }
}

// user/memberlist-info/get_all_exco/
//Get Events
export const GetExcos = async(status,callback)=>{
    try {
        const response = await api.get(`tenant/${localStorage.getItem('org_name')}/tenant/user/memberlist-info/get_all_exco/`)
       
        if (response.status==200) {
            callback(response);
        } else {
          console.log(response.status)
          callback(response.status)
        }
    } catch (error) {
        console.error(error)
        // setLoading(false)

    }
}

//Get Events
export const GetElections = async(status,callback)=>{
    try {
        const response = await api.get(`tenant/${localStorage.getItem('org_name')}/tenant/election/adminmanageballotbox/list_of_elections/`)
       
        if (response.status==200) {
            callback(response);
        } else {
          console.log(response.status)
          callback(response.status)
        }
    } catch (error) {
        console.error(error)
        // setLoading(false)

    }
}

// /user/memberlist-info/my_profile/
// Get Profile
export const GetProfile = async(status,callback)=>{
    try {
        const response = await api.get(`tenant/${localStorage.getItem('org_name')}/tenant/user/memberlist-info/my_profile/`)
       
        if (response.status==200) {
            callback(response);
        } else {
          console.log(response.status)
          callback(response.status)
        }
    } catch (error) {
        console.error(error)
        // setLoading(false)

    }
}

// tenant/election/adminmanageballotbox/list_of_contestant/?election_id=2

export const GetContestants = async(id,callback, setLoading)=>{
    try {
        const response = await api.get(`tenant/${localStorage.getItem('org_name')}/tenant/election/adminmanageballotbox/list_of_contestant/?election_id=${id}`)
       
        if (response.status==200) {
            callback(response);
            setLoading(false)
        } else {
          console.log(response.status)
          callback(response.status)
          setLoading(false)
        }
    } catch (error) {
        console.error(error)
        setLoading(false)

        // setLoading(false)

    }
}
