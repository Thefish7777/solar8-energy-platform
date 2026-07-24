interface Props {

    annualSaving: number;

}

export default function FinancialProjection({

    annualSaving,

}: Props) {

    const rows = [];

    let cumulative = 0;

    for (let year = 1; year <= 25; year++) {

        cumulative += annualSaving;

        rows.push({

            year,

            annual: annualSaving,

            cumulative,

        });

    }

    return (

        <div className="mt-12 rounded-3xl border border-slate-200 bg-white p-8">

            <h2 className="text-3xl font-bold">

                25-Year Financial Projection

            </h2>

            <p className="mt-2 text-slate-600">

                Estimated savings assuming today's electricity prices.

            </p>

            <div className="mt-8 max-h-[500px] overflow-y-auto rounded-2xl border">

                <table className="w-full">

                    <thead className="sticky top-0 bg-slate-100">

                        <tr>

                            <th className="px-6 py-4 text-left">

                                Year

                            </th>

                            <th className="px-6 py-4 text-right">

                                Annual Saving

                            </th>

                            <th className="px-6 py-4 text-right">

                                Cumulative Saving

                            </th>

                        </tr>

                    </thead>

                    <tbody>

                        {rows.map((row) => (

                            <tr
                                key={row.year}
                                className="border-t"

                            >

                                <td className="px-6 py-3">

                                    {row.year}

                                </td>

                                <td className="px-6 py-3 text-right">

                                    R{row.annual.toLocaleString()}

                                </td>

                                <td className="px-6 py-3 text-right font-semibold text-green-700">

                                    R{row.cumulative.toLocaleString()}

                                </td>

                            </tr>

                        ))}

                    </tbody>

                </table>

            </div>

        </div>

    );

}