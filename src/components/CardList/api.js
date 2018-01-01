import {get} from 'src/axios'

export function getArticleList(page,page_size) {
    let url = 'http://127.0.0.1:8000/api/article'
    let data = {
        page: page,
        page_size: page_size
    }
    return get(url, data)
}