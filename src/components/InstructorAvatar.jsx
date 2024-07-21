export default function InstructorAvatar({ imgSrc }) {
    return (
        <img
            src={imgSrc}
            alt="instructor"
            className="w-16 h-1/6 rounded-full box-content border-5 border-gradientPurple"
        />
    );
}
