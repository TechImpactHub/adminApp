//import our graph query parser
import gql from 'graphql-tag';

export const SET_PARTNER_PIN = gql`
  mutation setPin($partnerUuid: String!, $pin: String!) {
    setPin(pin: $pin, partnerUuid: $partnerUuid) {
      refreshToken
      token
    }
  }
`;

export const ADD_TRANSACTION = gql`
  mutation addTransaction( $partnerUuid: String!
                            $storeUuid: String!
                            $amount: String!
                          ) 
{
    addTransaction(input: 
    {
        partnerUuid: $partnerUuid,
        storeUuid: $storeUuid,
        amount: $amount,
    })
        {
            transaction 
            {
                amount
            }
        
        }
}
`;
export const LOGIN = gql`
  query login($partnerUuid: String!) {
    login(partnerUuid: $partnerUuid) {
      refreshToken
      token
    }
  }
`;

export const UPLOAD_FILE = gql`
  mutation($file: Upload!) { 
    imageUpload(file: $file) {
      success
    }
  }
`;

export const CREATE_USER = gql`
  mutation createUser(
    $firstName: String!
    $lastName: String!
    $nationalId: String!
    $phone: String!
    $role: String!
  ) {
    createUser(
      firstName: $firstName
      lastName: $lastName
      nationalId: $nationalId
      phone: $phone
      role: $role
    ) {
      refreshToken
      token
      user {
        username
        firstName
        lastName
      }
      partner {
        role
        partnerUuid
        nationalId
      }
    }
  }
`;

export const GET_PARTNER_BY_PHONE_MUTATION = gql`
  query partnerByPhone($phone: String!) {
    partnerByPhone(phone: $phone) {
      phone
      partner {
        partnerUuid
        nationalId
        pushToken
        role
        user {
          username
          firstName
          lastName
          email
        }
        salespersonSet {
          edges {
            node {
              partner {
                nationalId
                partnerUuid
              }
              storeSet {
                edges {
                  node {
                    name
                    storeUuid
                    productSet {
                      edges {
                        node {
                          name
                          unitCost
                          sellingPrice
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
        vendorSet {
          edges {
            node {
              partner {
                partnerUuid
              }
            }
          }
        }
        studentSet {
          edges {
            node {
              school {
                name
              }
              partner {
                partnerUuid
              }
            }
          }
        }
        parentSet {
          edges {
            node {
              student {
                partner {
                  user {
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
`;

export const ADD_BUSINESS_STORE_MUTATION = gql`
  mutation addbusinessMutation(
    $partnerUuid: String!
    $name: String!
    $category: String!
  ) {
    addStore(
      input: {category: $category, name: $name, partnerUuid: $partnerUuid}
    ) {
      store {
        id
        name
        salesPerson {
          partner {
            partnerUuid
            user {
              username
            }
          }
        }
        business {
          name
          businessUuid
        }
      }
    }
  }
`;
export const ADD_VENDOR_BUSINESS_MUTATION = gql`
  mutation addbusinessMutation(
    $partnerUuid: String!
    $businessName: String!
    $category: String!
  ) {
    addBusiness(
      input: {
        category: $category
        name: $businessName
        partnerUuid: $partnerUuid
      }
    ) {
      business {
        name
        vendor {
          partner {
            partnerUuid
            user {
              username
            }
          }
        }
      }
    }
  }
`;
export const ADD_SALESPERSON_MUTATION = gql`
  mutation addstudentMutation($nationalId: String!, $businessUuid: String!) {
    addSalesPerson(
      input: {businessUuid: $businessUuid, nationalId: $nationalId}
    ) {
      salesPerson {
        business {
          name
          businessUuid
        }
        partner {
          partnerUuid
          nationalId

          user {
            email
            password
            username
            firstName
            lastName
          }
          partnerRole {
            role
          }
          contactSet {
            edges {
              node {
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
export const ADD_STUDENT_MUTATION = gql`
  mutation addstudentMutation($nationalId: String!, $schoolUuid: String!) {
    addStudent(input: {schoolUuid: $schoolUuid, nationalId: $nationalId}) {
      student {
        school {
          name
          schoolUuid
        }
        partner {
          partnerUuid
          nationalId

          user {
            email
            password
            username
            firstName
            lastName
          }
          partnerRole {
            role
          }
          contactSet {
            edges {
              node {
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
export const ADD_VENDOR_MUTATION = gql`
  mutation addvendorMutation($partnerUuid: String!, $schoolUuid: String!) {
    addVendor(input: {schoolUuid: $schoolUuid, partnerUuid: $partnerUuid}) {
      vendor {
        school {
          name
          schoolUuid
        }
        partner {
          partnerUuid
          nationalId
          role

          user {
            email
            password
            username
            firstName
            lastName
          }
          contactSet {
            edges {
              node {
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
export const BUSINESS_TAG_QUERY = gql`
  query tag($slug: String!) {
    tag(id: $id) {
      partnerUuid
      user
    }
  }
`;

export const ADD_PRODUCT_MUTATION = gql`
  mutation addproductMutation(
    $partnerUuid: String!
    $productUuid: String!
    $name: String!
    $category: String!
    $sellingPrice: String!
    $marketPrice: String!
    $unitCost: String!
    $quantity: String!
  ) {
    addProduct(
      input: {
        category: $category
        productUuid: $productUuid
        partnerUuid: $partnerUuid
        name: $name
        sellingPrice: $sellingPrice
        unitCost: $unitCost
        marketPrice: $marketPrice
        quantity: $quantity
      }
    ) {
      product {
        name
        unitCost
        sellingPrice
        marketPrice
        quantity
        store {
          name
        }
      }
    }
  }
`;

export const ADD_SCHOOL_MUTATION = gql`
  mutation addschoolMutation(
    $name: String!
    $category: String!
    $partnerUuid: String!
    $schoolUuid: String!
  ) {
    addSchool(
      input: {
        schoolUuid: $schoolUuid
        partnerUuid: $partnerUuid
        name: $name
        category: $category
      }
    ) {
      school {
        name
        schoolUuid
        category {
          category
        }
        partner {
          user {
            username
          }
        }
      }
    }
  }
`;

export const LOGGED_PARTNER = gql`
  query($partnerUuid: String!) {
    partner(partnerUuid: $partnerUuid) {
      partnerUuid
      nationalId
      salespersonSet {
        edges {
          node {
            storeSet {
              edges {
                node {
                  name
                  productSet {
                    edges {
                      node {
                        name
                        unitCost
                        sellingPrice
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`;
export const GET_PARTNER_MUTATION = gql`
  query getpartnerMutation($partnerUuid: String!) {
    getPartner(input: {partnerUuid: $partnerUuid}) {
      partner {
        partnerUuid
        nationalId

        user {
          email
          password
          username
          firstName
          lastName
        }
        partnerRole {
          role
        }
        contactSet {
          edges {
            node {
              phone
              city
              neighborhood
              street
            }
          }
        }
        salespersonSet {
          edges {
            node {
              partner {
                partnerUuid
                nationalId

                user {
                  email
                  password
                  username
                  firstName
                  lastName
                }
                partnerRole {
                  role
                }
              }
              storeSet {
                edges {
                  node {
                    name
                  }
                }
              }
            }
          }
        }
        vendorSet {
          edges {
            node {
              partner {
                partnerUuid
              }
            }
          }
        }
        studentSet {
          edges {
            node {
              school {
                name
              }
              partner {
                partnerUuid
              }
            }
          }
        }
        parentSet {
          edges {
            node {
              student {
                partner {
                  user {
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
`;

export const EDIT_PARTNER = gql`
mutation editPartner(
    $partnerUuid: String!
    $nationalId: String!      
    $phone: String!
    $firstName: String!
    $lastName: String!
  ) {
    editPartner(
      input: {
        partnerUuid: $partnerUuid,
        nationalId: $nationalId
        phone: $phone
        firstName: $firstName
        lastName: $lastName
      }
    ) {
      partner{
        user
        {
          firstName
          lastName
          
        }
        contactSet
        {
          edges
          {
            node
            {
              phone
            }
          }
        }
      }
    }
  }
`;

export const LOGIN_MUTATION = gql`
  mutation LoginMutation($phone: String!) {
    login(input: {phone: $phone}) {
      user {
        email
        password
      }
    }
  }
`;

export const GET_PARTNER_BY_PHONE = gql`
  mutation GETPARTNERBYPHONE($phone: String!) {
    getPartnerByPhone(input: {phone: $phone}) {
      contact {
        phone
        street
        partner {
          id
          pushToken
          nationalId
          partnerUuid
        }
      }
    }
  }
`;

export const CREATE_TAG_MUTATION = gql`
  mutation createMutation($name: String!) {
    addBusinessTag(input: {name: $name}) {
      tag {
        name
      }
    }
  }
`;
