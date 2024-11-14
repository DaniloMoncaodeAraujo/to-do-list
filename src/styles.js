import styled from 'styled-components'
import breakpoints from './breakpoints';
import { FcEmptyTrash, FcCheckmark } from "react-icons/fc";

// @media ${brekpoints.sm} { }

export const ContainerFather = styled.main`
       
       background: linear-gradient(to bottom, #C8102E, #292929);
        width: 100vw;
        height: 100vh;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        gap: 40px;
`

export const Container = styled.section` 
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
  margin-top: 50px;

  @media ${breakpoints.md} {
    margin-top: 10px;
  }

  h2{
    text-align: center;
    font-size: 50px;
    color: #fff;
    font-weight: 400;
    color: #000;

    @media ${breakpoints.xll} {
      font-size: 45px;
      
    }

    @media ${breakpoints.sm} {
      font-size: 35px;
    }
  }

  h3{
    text-align: center;
    font-size: 25px;
    color: #fff;
    font-weight: 400;

    @media ${breakpoints.xll} {
     font-size: 24px;
    }

    @media ${breakpoints.sm} {
      font-size: 20px;
    }
  }

  p{
    text-align: center;
    font-size: 20px;
    color: #0f0f0f;
    color: #fff;
    font-weight: 300;

    @media ${breakpoints.sm} {
      font-size: 17px;
    }
  }

  button{
   font-size: 25px;
   margin-top: 20px;
   padding: 10px;
   border-radius: 25px;
   border: 2px solid #000;
   color: #fff;
   font-weight: 400;
   background-color: #C8102E;
   cursor: pointer;

   @media ${breakpoints.sm} {
      font-size: 18px;
    }

   &:hover{
     border: none;
     border: 2px solid #fff;
     background-color: #000;
   }
  }
`

export const ToDoList = styled.section`
     border-radius: 10px;
     border: 5px solid #000  ;
    // max-height: 3500px;
     margin-bottom: 50px;
     width: 600px;

     @media ${breakpoints.md} {
         width: 450px;
      }

      @media ${breakpoints.sm} {
         width: 90vw;
      }

     

     .container-one{
          display: flex;
          border-radius: 2px;
          padding: 20px;
          background-color: #fff;
          border-bottom: 1px solid #000;
          justify-content: space-between;
          width: 100%;

          .paragrafo-error{
            color: #C8102E;
            text-align: center;

            @media ${breakpoints.sm} {
              font-size: 14px;
            }
          }

          @media ${breakpoints.md} {
            padding: 10px;
          }
          
     }

     .container-two{
          border-radius: 2px;
          max-height: 250px;
          overflow-x: auto;
          display: flex;
          flex-direction: column;
          align-items: center;
           background-color: #fff;
           padding: 20px;

           @media ${breakpoints.xll} {
            max-height: 180px;
           }

           
     }

     ul{
        padding: 0px;
        margin-top: 10px;
        display: flex;
        flex-direction: column;
        gap: 20px;

        h3{
          font-size: 20px;
          margin-top: 50px;
          color: #000;
          font-weight: 400;
        }
     }
`

export const Input = styled.input`
     border:  2px solid #000;
     border-radius: 5px;
     height: 40px;
     margin-right: 10px;
     width: 65%;
     
     padding: 0 5px;

`

export const Button = styled.button`
    background: #C8102E;
    border: 2px solid #000;
    border-radius: 5px;
    font-weight: 900;
    font-size: 17px;
    line-height: 2px;
    height: 40px;
    width: 25%;
    color: #fff;
    cursor: pointer;

    &:hover{
     color: #000;
    }

`

export const ListItem = styled.div`
     background-color: ${props => props.isFinished ? '#B3E5FC        ' : '#F0F0F0 '};
     display: flex;
     box-shadow: 1px 4px 10px rgba(0,0,0,0.2);
     border-radius: 5px;
     height: 60px;
     align-items: center;
     justify-content: space-between;
     padding: 0 10px;
     width: 300px;

     @media ${breakpoints.sm} {
      width: 270px;
    }

    li{
        padding: 20px;
        list-style: none;
        text-align: center;
        width: 100%;
        
    }
`

export const H3 = styled.h3`
   text-align: center;
   opacity: 0.7;
`

export const Trash = styled(FcEmptyTrash)`
     cursor: pointer;
`

export const Check = styled(FcCheckmark)`
     cursor: pointer;
`
