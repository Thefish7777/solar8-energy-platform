export default function StepProperty({ next, update }) {

    const select = (value) => {

        update("property", value);

        next();

    };

    return (

        <>

            <h2>Step 1 of 6</h2>

            <p className="step-intro">

                What type of property is this?

            </p>

            <div className="option-grid">

                <button onClick={() => select("Residential")}>

                    🏡

                    <span>Residential Home</span>

                </button>

                <button onClick={() => select("Business")}>

                    🏢

                    <span>Business</span>

                </button>

                <button onClick={() => select("Farm")}>

                    🚜

                    <span>Farm</span>

                </button>

                <button onClick={() => select("School")}>

                    🏫

                    <span>School</span>

                </button>

                <button onClick={() => select("Warehouse")}>

                    📦

                    <span>Warehouse</span>

                </button>

                <button onClick={() => select("Other")}>

                    ⚡

                    <span>Other</span>

                </button>

            </div>

        </>

    );

}