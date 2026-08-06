import "./Proposal.css";

export default function ProposalHeader() {

    const today = new Date();

    const proposalNumber =
        `S8-${today.getFullYear()}${String(today.getMonth()+1).padStart(2,"0")}${String(today.getDate()).padStart(2,"0")}-${Math.floor(Math.random()*9000+1000)}`;

    return (

        <header className="proposal-cover">

            <div className="cover-left">

                <h1>

                    Solar8

                </h1>

                <h2>

                    Residential Solar Recommendation

                </h2>

                <p>

                    Smart Solar Solutions for South African Homes

                </p>

            </div>

            <div className="cover-right">

                <table>

                    <tbody>

                        <tr>

                            <td>Proposal</td>

                            <td>{proposalNumber}</td>

                        </tr>

                        <tr>

                            <td>Date</td>

                            <td>

                                {today.toLocaleDateString("en-ZA",{

                                    day:"2-digit",

                                    month:"long",

                                    year:"numeric"

                                })}

                            </td>

                        </tr>

                    </tbody>

                </table>

            </div>

        </header>

    );

}