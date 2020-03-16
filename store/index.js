const axios = require('axios')
export const strict = false

export const state = () => ({
    posts: []
})
  
export const mutations = {  
    set_Posts: (state, data)=>{
        state.posts = data
    }

}

export const actions = {

    async nuxtServerInit({commit, dispatch},{error}){
        try{
            let res = await axios.get('https://api.storyblok.com/v1/cdn/stories?starts_with=blog/&token=CMkBQJU6B0Yltmeq0efyqQtt&version=published')

            let data =  res.data.stories.map(post =>{
                return{
                    id: post.slug,
                    title: post.content.title,
                    description: post.content.description,
                    body: post.content.body,
                    tags: post.tag_list,
                    thumbnail: post.content.thumbnail.url,
                    date: post.published_at
                }
            })
            await dispatch('projects/getProjects')
            commit("set_Posts", data)   

        } catch(e){
            error({message: 'server error' })
        }          
    }   
}

export const getters = {

    posts(state){
        return state.posts
    },
}