import styled from 'styled-components'

export const CheckOut = styled.div`
    width: 70%;
    min-height: 90vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 50px auto 0;

    @media all and (max-width: 468px){
        width: 100%;
    }

    @media all and (max-width: 768px){
        width: 90%;
    }
    
  .total {
    margin-top: 30px;
    margin-left: auto;
    font-size: 36px;
  }

  button {
    margin-left: auto;
    margin-top: 40px;
  }

  .test-warning {
    text-align: center;
    margin-top: 40px;
    color: red;
  }
`;

export const CheckOutItems = styled.table`
    width: 100%;
    
    thead {
        th {
            width: 20%;
                @media all and (max-width: 468px){
                  font-size: 14px;
                }
            }
    }
    
    tbody:before {
        content: "@";
        display: block;
        line-height: 20px;
        text-indent: -99999px;
    }
`;
