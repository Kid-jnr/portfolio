const axios = require('axios')

export const state = () => ({
    projects: []
})
  
export const mutations = {

    set_Projects: (state, data)=>{
        state.projects = data
    }

}

export const actions = {
    async getProjects ({commit}){
        try{
            let res = await axios.get('https://api.storyblok.com/v1/cdn/stories?starts_with=project/&token=qOR8rxixBwqEai50JQdSgAtt&version=draft')

            let data =  res.data.stories.map(project =>{
                return{
                    title: project.content.title,
                    description: project.content.description,
                    tools: project.content.tools,
                    thumbnail: project.content.image.url,
                    link: project.content.link.url
                }
            })
            commit("set_Projects", data)
        } catch(e){
            error({message: 'server error' })
        }            
    }       
}

export const getters = {

    projects(state){
        return state.projects
    }      
}