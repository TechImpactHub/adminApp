//import our graph query parser
import gql from "graphql-tag";

// our first query will requests all movies
// with only given fields
// note the usage of gql with jsvascript string literal  
export const STORES_LIST_QUERY = gql`
{
    allStores
    {
      edges
      {
        node
        { 
          id
          name
          subcategory
          salesPerson
          {
            partner{
              user
              {
                firstName
                lastName
                username
                
              }
              nationalId
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
          business
          {
            name
          }
        }
      }
    }
  }

`
export const SALESPERSONS_LIST_QUERY = gql`
{
    allSalesperson
      {
        edges
        {node
        {
          partner{
            partnerUuid
            user
            {
                email
                username 
                firstName
                lastName
            }
            partnerRole
            {
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
          business
          {
            name
          }
        }
        }
      }
    }
`

export const SCHOOLS_LIST_QUERY = gql`
{
    allSchools
    {
      edges
      {
        node 
        {
          name
          schoolUuid
          category
          {
            category
          }
        }
      }
    }
  }
`
export const STUDENTS_LIST_QUERY = gql`
{
    allStudents
      {
        edges
        {node
        {
          partner{
            partnerUuid
            user
            {
                email
                username 
                firstName
                lastName
            }
            partnerRole
            {
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
          school
          {
            name
          }
        }
        }
      }
    }
`
export const BUSINESS_TAGS_LIST_QUERY = gql`
{
    allTags {
       edges {
        node {
          id
          name
          
        }
      }
    }
  }
`
export const CATEGORY_LIST_QUERY = gql`
{
    allBusinessCategories
    {
      edges
      {
        node
        {
          id
          category
          
        }
      }
    }
  }
`
export const TRANSACTIONS_LIST_QUERY = gql`
{
    allTransactions{
      edges{
        node{
          To
          From
          date
          amount
        }
      }
      
    }
  }
`
export const BUSINESS_LIST_QUERY = gql`
{
    allBusinesses {
      edges
      {
        node
        {
          name
          businessUuid
          vendor{
            partner{
              partnerUuid
            }
          }
        }
      }
    }
    }
`

export const PARTNERS_LIST_QUERY = gql`
{
    allPartners{
      edges{
        node{
          partnerUuid
          nationalId
          user{
            username
            firstName
            lastName
            email
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

