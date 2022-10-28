const axios = require("axios");

const search = async (keyword) => {
    let { data: posts } = await axios.get("http://jsonplaceholder.typicode.com/posts");
    if(keyword) {
        posts = posts.filter(post => post.title.toLowerCase().includes(keyword.toLowerCase()));
    }
    
    return posts;
}

const autocomplete = async (keyword) => {
    let { data: posts } = await axios.get("http://jsonplaceholder.typicode.com/posts");
    let words = [];
    
    posts.forEach((post) => {
        words = [
            ...words,
            ...post.title.split(" ")
        ]
    });

    words = [...new Set(words)];

    if(keyword) {
        words = words.filter(word => word.toLowerCase().includes(keyword.toLowerCase()))
    }

    return words;
}

module.exports = {
    search,
    autocomplete
}