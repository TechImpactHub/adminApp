//import our graph query parser
import gql from "graphql-tag";

export const ADD_BUSINESS_STORE_MUTATION = gql`
    mutation addbusinessMutation(
                                $nationalId: String!
                                $storeName: String!
                                $subcategory: String!
        )
        {
            addStore(input: 
                {
                subcategory: $subcategory,
                name: $storeName,
                nationalId: $nationalId,

                })
            { 
                store 

                {   id
                    name
                    salesPerson
                    {
                        partner
                        {
                          partnerUuid
                          user
                          {
                            username
                          }
                        }
                    }
                    business
                    {
                        name
                        businessUuid
                    }

                    
                }
            }
        }
`
export const ADD_VENDOR_BUSINESS_MUTATION = gql`
    mutation addbusinessMutation(
                                $nationalId: String!
                                $storeName: String!
                                $subcategory: String!
                                $category: String!
        )
        {
            addBusiness(input: 
                {
                category: $category,
                subcategory: $subcategory,
                name: $businessName,
                nationalId: $nationalId,

                })
            { 
                business 
                {    name
                    vendor
                    {
                        partner
                        {
                          partnerUuid
                          user
                          {
                            username
                          }
                        }
                    }
                    
                }
            }
        }
`
export const ADD_SALESPERSON_MUTATION = gql`
    mutation addstudentMutation(
                                $nationalId: String!
                                $businessUuid: String!
        )
        {
            addSalesPerson(input: 
                {
                businessUuid: $businessUuid,
                nationalId: $nationalId,

                })
            { 
               salesPerson 
                {
                    business
                    {
                        name
                        businessUuid
                    }
                    partner 
                    {
                        partnerUuid
                        nationalId
    
                        user
                        {
                            email
                            password 
                            username 
                            firstName
                            lastName 
                        }
                        partnerRole{
                            role
                          }
                        contactSet
                        {
                          edges
                          {
                            node
                            {
                              phone
                              city
                              neighborhood
                              street
                            }
                          }
                        }

                    }
                }
                
            }
        }
`
export const ADD_STUDENT_MUTATION = gql`
    mutation addstudentMutation(
                                $nationalId: String!
                                $schoolUuid: String!
        )
        {
            addStudent(input: 
                {
                schoolUuid: $schoolUuid,
                nationalId: $nationalId,

                })
            { 
               student 
                {
                    school
                    {
                        name
                        schoolUuid
                    }
                    partner 
                    {
                        partnerUuid
                        nationalId
    
                        user
                        {
                            email
                            password 
                            username 
                            firstName
                            lastName 
                        }
                        partnerRole{
                            role
                          }
                        contactSet
                        {
                          edges
                          {
                            node
                            {
                              phone
                              city
                              neighborhood
                              street
                            }
                          }
                        }

                    }
                }
                
            }
        }
`
export const ADD_VENDOR_MUTATION = gql`
    mutation addvendorMutation(
                                $nationalId: String!
                                $schoolUuid: String!
        )
        {
            addVendor(input: 
                {
                schoolUuid: $schoolUuid,
                nationalId: $nationalId,

                })
            { 
                vendor 
                {
                    school
                    {
                        name
                        schoolUuid
                    }
                    partner 
                    {
                        partnerUuid
                        nationalId
    
                        user
                        {
                            email
                            password 
                            username 
                            firstName
                            lastName 
                        }
                        partnerRole{
                            role
                          }
                        contactSet
                        {
                          edges
                          {
                            node
                            {
                              phone
                              city
                              neighborhood
                              street
                            }
                          }
                        }

                    }
                }
                
            }
        }
`
export const BUSINESS_TAG_QUERY = gql`
    query tag($slug:String!){
        tag(id:$id){
            partnerUuid 
            user
        }
    }
    
`

export const ADD_SCHOOL_MUTATION = gql`
    mutation addschoolMutation( $name: String!
                                $category: String!
                                $email: String!
                                $schoolUuid: String!
        ){
            addSchool(input: 
                {
                email: $email,
                schoolUuid: $schoolUuid,
                name: $name,
                category: $category,

                })
            { 
                school 
                {
                    name
                    schoolUuid
                    category
                    {
                      category
                    }
                    partner
                    {
                      user {
                        username
                      }
                    }
                }
                
            }
        }
`
export const GET_PARTNER_MUTATION = gql`
    query partnerByPhone( $phone: String!
       
        ){
            partnerByPhone(phone:$phone)
            {
              phone
              partner
              {
                partnerUuid
                nationalId
                user
                {
                  username
                  firstName
                  lastName
                  email
                }
                partnerRole
          
                {
                  role
                }
                salespersonSet
                {
                  edges
                  {
                    node
                    {
                        partner{
                            nationalId
                            partnerUuid
                            
                          }
                      storeSet
                      {
                        edges
                        {
                          node
                          {
                            name
                            productSet
                            {
                              edges
                              {
                                node
                                {
                                  name
                                  unitCost
                                  unitPrice
                                  productUuid
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
                vendorSet 
                {
                    edges
                    {
                      node
                      {
                        partner
                        {
                          partnerUuid
                        }
                      }
                    }
                }
                                    studentSet
                              {
                                edges
                                {
                                  node
                                  {
                                    school
                                    {
                                      name
                                    }
                                    partner
                                    {
                                      partnerUuid
                                      
                                    }
                                  }
                                }
                              }
                              parentSet
                              {
                                edges
                                {
                                  node
                                  {
                                    student
                                    {
                                      partner
                                      {
                                        user
                                        {
                                          lastName
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                
              }
            }
          }
`

export const SIGNUP_MUTATION = gql`
  mutation signupMutation(  
                            $email: String!
                            $nationalId: String!
                            $pushToken: String!
                            $username: String!
                            $firstName: String!
                            $lastName: String!
                            $neighborhood: String!
                            $city: String!
                            $street: String!
                            $phone: String!
                            $role: String!
                            
  ) {
    signUp(input: {
        
        nationalId: $nationalId, 
        email: $email, 
        pushToken: $pushToken, 
        username: $username, 
        firstName: $firstName,
        lastName: $lastName
        neighborhood: $neighborhood,
        city: $city,
        street: $street,
        phone: $phone,
        role: $role,
        
    }) {
    user{
        email
        password 
        username 
        firstName
        lastName 
        partner{
            partnerUuid
            nationalId
            pushToken
            partnerRole{
              role
              timeAdded
            }
            contactSet
            {
              edges
              {
                node
                {
                  phone
                  city
                  neighborhood
                  street
                }
              }
            }
          }       

    }
  }
  }
`;

export const LOGIN_MUTATION = gql`
  mutation LoginMutation(
    $email: String!
    $password: String!
  ) {
    login(input: {email: $email, password: $password}) {
        user{email password}
    }
  }
`;

export const CREATE_TAG_MUTATION = gql`
  mutation createMutation(
    $name: String!
  ) {
    addBusinessTag(input: {name: $name}) {
        tag{name}
    }
  }
`;
