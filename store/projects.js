const StoryblokClient = require('storyblok-js-client');

let Storyblok = new StoryblokClient({
    accessToken: 'CMkBQJU6B0Yltmeq0efyqQtt'
});

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
            let res = await Storyblok.get('cdn/stories?starts_with=project/', {version: 'published'} )

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