export default function FinancialAsset() {
    return (
        <div className="flex flex-row items-center justify-between w-full h-24 bg-white shadow-sm border border-neutral-100 rounded-md border-l-4 border-l-primary-500 p-3">
            <div className="flex flex-col">
                <p className="font-semibold text-sm">MXRF11</p>
                <p className="font-normal text-lg">R$ 10,25</p>
            </div>
            <div className="flex flex-col text-right">
                <p className="text-xs">Cotas <b>109</b></p>
                <p className="text-xs">Total <b>R$ 1.117,25</b></p>
            </div>
        </div>
    );
}