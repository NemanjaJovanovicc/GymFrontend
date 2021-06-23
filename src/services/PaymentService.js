import axios from 'axios';
import authHeader from "./auth-header";


const PAYMENT_API_BASE_URl = "http://localhost:8080/payment";

class PaymentService {

    getPayments() {
        return axios.get(PAYMENT_API_BASE_URl);
    }

    createPayment(payment){
        return axios.post(PAYMENT_API_BASE_URl, payment, { headers: authHeader() });
    }

    getPaymentById(paymentId){
        return axios.get(PAYMENT_API_BASE_URl + '/' + paymentId, { headers: authHeader() });
    }

    updatePayment(payment, paymentId){
        return axios.put(PAYMENT_API_BASE_URl , payment, { headers: authHeader() });
    }

    deletePayment(paymentId){
        return axios.delete(PAYMENT_API_BASE_URl + '/' + paymentId, { headers: authHeader() });
    }
}

export default new PaymentService()