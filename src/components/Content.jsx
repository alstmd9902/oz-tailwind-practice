export default function Content({ content }) {
  return (
    <div className="flex flex-col items-start gap-[5px]">
      <img
        src={content.img}
        alt={content.title}
        className="rounded-b-xl w-[300px] mb-[3px]"
      />
      <span className="text-xs text-[#d7fa00] border-[#d7fa00] border px-1 py-[5px] rounded-[3px]">
        모집중
      </span>
      <div className="text-lg font-medium text-white">{content.title}</div>
      <p className="text-xs text-[rgb(160,160,160)]">{content.subtitle}</p>
    </div>
  );
}
