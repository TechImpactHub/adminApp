import http from '../http-common';
import {
        SALESPERSONS_LIST_QUERY , 
        SCHOOLS_LIST_QUERY, 
        TRANSACTIONS_LIST_QUERY, 
        BUSINESS_TAGS_LIST_QUERY, 
        PARTNERS_LIST_QUERY, 
        STORES_LIST_QUERY,
        GET_STUDENTS 
        } from './query';
import {client} from '../gql-config';


class TransactionDataService {
    getAllTransactions() {
        const getAllTransactions = client
        .query({
          query: TRANSACTIONS_LIST_QUERY,
        });
        return getAllTransactions;
    }
    getAllStores() {
        const getAllStores = client
        .query({
          query: STORES_LIST_QUERY,
        });
        return getAllStores;
    }
    getAllStudents() {
        const getAllStudents = client
        .query({
          query: GET_STUDENTS,
        });
        return getAllStudents;
    } 
    getAllSalesPersons() {
        const getAllSalesPersons = client
        .query({
          query: SALESPERSONS_LIST_QUERY,
        });
        
        return getAllSalesPersons;
    }     
    getAllSchools() {
        const getAllSchools = client
        .query({
          query: SCHOOLS_LIST_QUERY,
        });
        return getAllSchools;
    }
    getAllTags() {
        const allTags = client
        .query({
          query: BUSINESS_TAGS_LIST_QUERY,
        });
        
        return allTags;
    }
    getAllPartners() {
        const allPartners = client
        .query({
          query: PARTNERS_LIST_QUERY,
        });
        console.log(allPartners)
        return allPartners;
    }
    getAll() {
        const allTags = client
        .query({
          query: BUSINESS_TAGS_LIST_QUERY,
        });
        return allTags;
    }
    get(id) {
        
        return http.get(`/transactions/${id}`);

    }
    create(data) {
        
        return http.post("/add_transaction",data)
    }
    update(id, data) {
        return http.put(`/transactions/${id}`, data);
      }
    
      delete(id) {
        return http.delete(`/transactions/${id}`);
      }
    
      deleteAll() {
        return http.delete(`/transactions`);
      }
    
      findByTitle(title) {
        return http.get(`/transactions?title=${title}`);
      }

}


export default new TransactionDataService();