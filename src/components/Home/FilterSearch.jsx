import { Label, SearchField, ListBox, Select } from "@heroui/react";

const FilterSearch = ({ cardsData }) => {
  console.log("Cards data in filter search =>", cardsData);
  const bloodGroups = [
    { value: "A+", label: "A+" },
    { value: "A-", label: "A-" },
    { value: "B+", label: "B+" },
    { value: "B-", label: "B-" },
    { value: "AB+", label: "AB+" },
    { value: "AB-", label: "AB-" },
    { value: "O+", label: "O+" },
    { value: "O-", label: "O-" },
  ];
  return (
    <div>
      <div className="flex items-center justify-center">
        <h2 className="text-base sm:text-lg mt-14 mb-6 text-red-600 shadow-lg bg-red-100 border border-red-200 rounded-full px-4 py-1">
          Total Donor:{" "}
          <span className="bg-red-600 text-white rounded-full px-2 py-0.5">
            {cardsData?.length}
          </span>
        </h2>
      </div>
      <div className="mb-8 max-w-3xl mx-auto flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
        {/* Search Field */}
        <SearchField name="search" className="w-full sm:w-[70%]">
          <Label className="uppercase text-gray-600">Search Donor</Label>
          <SearchField.Group className="border w-full py-5 bg-gray-50 shadow-md border-black/20">
            <SearchField.SearchIcon />
            <SearchField.Input placeholder="Search..." />
            <SearchField.ClearButton />
          </SearchField.Group>
        </SearchField>

        {/* Select Blood Group */}
        <Select className="w-full sm:w-[30%]" placeholder="Select one">
          <Label className="uppercase text-gray-600">Blood Group</Label>
          <Select.Trigger className="border shadow-md py-3 text-red-500 bg-gray-50 border-black/20">
            <Select.Value />
            <Select.Indicator />
          </Select.Trigger>
          <Select.Popover>
            <ListBox>
              {bloodGroups.map((group) => (
                <ListBox.Item
                  key={group.value}
                  id={group.value}
                  textValue={group.label}
                  className="text-red-600"
                >
                  {group.label}
                  <ListBox.ItemIndicator className="text-red-600" />
                </ListBox.Item>
              ))}
            </ListBox>
          </Select.Popover>
        </Select>
      </div>
    </div>
  );
};

export default FilterSearch;
