export default function FinanceCard({ imageSrc, amount, text, className }) {
    return (
        <div
            className={` px-5 py-4 bg-white rounded-2xl flex-1 flex items-center flex-col justify-center ${className}`}
        >
            <img src={imageSrc} alt="" />
            <p className=" font-bold my-4">
                $ {Intl.NumberFormat("en-US").format(amount)}
            </p>
            <p className=" text-black text-opacity-60">{text}</p>
        </div>
    );
}
