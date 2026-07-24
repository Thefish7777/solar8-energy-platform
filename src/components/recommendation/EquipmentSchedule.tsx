interface Props {

    inverter: string;

    battery: string;

    panels: string;

}

export default function EquipmentSchedule({

    inverter,

    battery,

    panels,

}: Props) {

    return (

        <div className="mt-12">

            <h2 className="text-3xl font-bold text-slate-900">

                Recommended Equipment

            </h2>

            <p className="mt-2 text-slate-600">

                The following equipment has been selected specifically for your energy requirements.

            </p>

            <div className="mt-8 overflow-hidden rounded-2xl border border-slate-200">

                <table className="w-full">

                    <thead className="bg-slate-100">

                        <tr>

                            <th className="px-6 py-4 text-left">Qty</th>

                            <th className="px-6 py-4 text-left">Equipment</th>

                            <th className="px-6 py-4 text-left">Warranty</th>

                        </tr>

                    </thead>

                    <tbody>

                        <tr className="border-t">

                            <td className="px-6 py-4">1</td>

                            <td className="px-6 py-4">{inverter}</td>

                            <td className="px-6 py-4">10 Years</td>

                        </tr>

                        <tr className="border-t bg-slate-50">

                            <td className="px-6 py-4">1</td>

                            <td className="px-6 py-4">{battery}</td>

                            <td className="px-6 py-4">10 Years</td>

                        </tr>

                        <tr className="border-t">

                            <td className="px-6 py-4">

                                {panels.split("×")[0].trim()}

                            </td>

                            <td className="px-6 py-4">

                                {panels}

                            </td>

                            <td className="px-6 py-4">

                                25 Years

                            </td>

                        </tr>

                    </tbody>

                </table>

            </div>

        </div>

    );

}