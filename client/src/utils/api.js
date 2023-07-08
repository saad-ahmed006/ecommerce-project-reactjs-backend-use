import axios from 'axios'

const params = {
    headers: {
        Authorization: "bearer " +'f83f3f456f04be9fc6ed253f8654a251a0a787677ffee715049cdb4c09151371edebde0297cbe2ad10fd481b7bb05f409c7ee5d6938e62e45d1d820af0cc346f1a5dd4a792ae424d542f4e5adec1b6554c22c4c7b7af23693eaf47fcb1e654cb141c48555b8ab882d49e850045d65749c7537307d8eac1fdd2510550176005bb',
    },
};
export const fetchDataFromApi = async (url) => {
    try {
        const { data } = await axios.get('http://localhost:1337' + url, params);
        return data;
    } catch (error) {
        console.log(error);
        return error
    }
}


