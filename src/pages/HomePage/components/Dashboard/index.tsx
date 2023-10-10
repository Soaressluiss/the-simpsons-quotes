import { Character } from "../Character"
import { DashboardContainer } from "./styles"

export const Dashboard :React.FC = () =>{
    return (
        <DashboardContainer>
            <div>

            </div>
            <section>
                <Character/>
                <Character/>
                <Character/>
                <Character/>
                <Character/>
                <Character/>
            </section>
        </DashboardContainer>
    )
}