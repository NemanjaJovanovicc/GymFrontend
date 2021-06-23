import axios from 'axios';
import authHeader from "./auth-header";

const CARDCATEGORY_API_BASE_URl = "http://localhost:8080/cardCategory";

class CardCategoryService {

    getCardCategorys() {
        return axios.get(CARDCATEGORY_API_BASE_URl);
    }

    createCardCategory(cardCategory){
        return axios.post(CARDCATEGORY_API_BASE_URl, cardCategory, { headers: authHeader() });
    }

    getCardCategoryById(cardCategoryId){
        return axios.get(CARDCATEGORY_API_BASE_URl + '/' + cardCategoryId, { headers: authHeader() });
    }

    updateCardCategory(cardCategory, cardCategoryId){
        return axios.put(CARDCATEGORY_API_BASE_URl , cardCategory, { headers: authHeader() });
    }

    deleteCardCategory(cardCategoryId){
        return axios.delete(CARDCATEGORY_API_BASE_URl + '/' + cardCategoryId, { headers: authHeader() });
    }
}

export default new CardCategoryService()