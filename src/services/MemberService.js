import axios from 'axios';
import authHeader from "./auth-header";

const MEMBER_API_BASE_URl = "http://localhost:8080/member";

class MemberService {

    getMembers() {
        return axios.get(MEMBER_API_BASE_URl);
    }

    createMember(member){
        return axios.post(MEMBER_API_BASE_URl, member, { headers: authHeader() });
    }

    getMemberById(memberId){
        return axios.get(MEMBER_API_BASE_URl + '/' + memberId, { headers: authHeader() });
    }

    updateMember(member, memberId){
        return axios.put(MEMBER_API_BASE_URl , member, { headers: authHeader() });
    }

    deleteMember(memberId){
        return axios.delete(MEMBER_API_BASE_URl + '/' + memberId, { headers: authHeader() });
    }
}

export default new MemberService()

