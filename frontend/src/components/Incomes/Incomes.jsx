import React from 'react'
import styled from 'styled-components'
import { InnerLayout } from '../../styles/Layouts';


function Incomes() {
  return (
    <IncomeStyled>
        <InnerLayout>
            <h2>
            <div className="income-content">
                <div className="form-container">
                    <div className="incomes">
                        
                    </div>
                </div>
            </div>
            </h2>
        </InnerLayout>
    </IncomeStyled>
  )
}
const IncomeStyled=styled.div`

`;
export default Incomes
