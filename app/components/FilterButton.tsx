import FlexLayout from "./ui/FlexLayout";

function FilterButton({
  option,
  options,
  toggle,
}: {
  option: string;
  options: string[];
  toggle: (option: string) => void;
}) {
  const active = options.includes(option);
  return (
    <div
      className="hover:cursor-pointer"
      onClick={() => {
        toggle(option);
      }}
    >
      <FlexLayout
        direction="row-always"
        className={`items-center gap-2 px-4 py-2 border border-blue/50 ${
          active && "bg-blue"
        } rounded-full`}
      >
        <p className=" select-none capitalize">{option}</p>
        <div className="p-0.5 border rounded-full border-gray size-3">
          <div
            className={`size-full rounded-full  ${
              active ? "bg-blue" : "bg-gray"
            }`}
          ></div>
        </div>
      </FlexLayout>
    </div>
  );
}

export default FilterButton;
