"use client";

import {
  Button,
  Input,
  Label,
  Modal,
  Surface,
  TextField,
  ListBox,
  Select,
  FieldError,
} from "@heroui/react";
import { useRouter } from "next/navigation";
import { FaPlus } from "react-icons/fa";
import { FiEdit3 } from "react-icons/fi";
import { toast } from "react-toastify";

const EditBloodCardModal = ({ myBloodCard }) => {
  const router = useRouter();
  const { bloodGroup, number, alternativeNumber, address, userId } =
    myBloodCard;
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

  const onSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_SERVER_URL}/blood-cards/${userId}`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      },
    );
    const result = await res.json();
    if (result.modifiedCount > 0) {
      toast.success("Blood card updated successfully!", {
        position: "top-center",
      });
      router.refresh();
    } else {
      toast.error("No changes were made to the blood card.", {
        position: "top-center",
      });
    }
  };

  return (
    <div>
      <Modal>
        <Button className="h-11 px-5 font-bold text-white bg-linear-to-r from-pink-600 to-red-600 rounded-xl shadow-md transition-all active:scale-98 flex items-center gap-2">
          <FiEdit3 className="size-4" />
          Edit Blood Card
        </Button>
        <Modal.Backdrop>
          <Modal.Container placement="auto">
            <Modal.Dialog className="sm:max-w-md">
              <Modal.CloseTrigger />
              <Modal.Header>
                <Modal.Icon className="bg-red-200">
                  <FiEdit3 className="text-red-600" />
                </Modal.Icon>
                <Modal.Heading>Edit Your Blood Card</Modal.Heading>
                <p className="mt-1.5 text-sm leading-5 text-muted">
                  Update your blood group or contact details below to keep your
                  donor profile accurate and reachable during an emergency.
                </p>
              </Modal.Header>
              <Modal.Body className="p-6">
                <Surface variant="default">
                  <form onSubmit={onSubmit} className="flex flex-col gap-4">
                    {/* Blood Group */}
                    <TextField
                      className="w-full"
                      type="text"
                      variant="secondary"
                    >
                      <Select
                        defaultValue={bloodGroup}
                        name="bloodGroup"
                        className="w-full"
                        placeholder="Select Your Blood Group"
                      >
                        <Label>Blood Group</Label>
                        <Select.Trigger className="bg-[#e1e1e2]">
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
                              >
                                {group.label}
                                <ListBox.ItemIndicator className="text-red-600" />
                              </ListBox.Item>
                            ))}
                          </ListBox>
                        </Select.Popover>
                        <FieldError />
                      </Select>
                    </TextField>
                    {/* Number */}
                    <TextField
                      defaultValue={number}
                      name="number"
                      className="w-full"
                      variant="secondary"
                      validate={(value) => {
                        if (/[^0-9]/.test(value)) {
                          return "শুধুমাত্র সংখ্যা (0-9) ব্যবহার করা যাবে";
                        }

                        if (value.length !== 11) {
                          return "ফোন নম্বরটি অবশ্যই ১১ ডিজিটের হতে হবে";
                        }

                        return null;
                      }}
                    >
                      <Label>Number</Label>
                      <Input type="tel" placeholder="Enter your number" />
                      <FieldError />
                    </TextField>
                    {/* Alternative Number */}
                    <TextField
                      defaultValue={alternativeNumber}
                      className="w-full"
                      name="alternativeNumber"
                      variant="secondary"
                      validate={(value) => {
                        if (/[^0-9]/.test(value)) {
                          return "শুধুমাত্র সংখ্যা (0-9) ব্যবহার করা যাবে";
                        }

                        if (value.length !== 11) {
                          return "ফোন নম্বরটি অবশ্যই ১১ ডিজিটের হতে হবে";
                        }

                        return null;
                      }}
                    >
                      <Label>Alternative Number</Label>
                      <Input
                        type="tel"
                        placeholder="Enter your alternative number"
                      />
                      <FieldError />
                    </TextField>
                    {/* Address */}
                    <TextField
                      defaultValue={address}
                      className="w-full"
                      name="address"
                      variant="secondary"
                    >
                      <Label>Address</Label>
                      <Input type="text" placeholder="Enter your address" />
                      <FieldError />
                    </TextField>

                    <Modal.Footer>
                      <Button
                        slot="close"
                        variant="danger-soft"
                        className="rounded-xl"
                      >
                        Cancel
                      </Button>
                      <Button
                        slot="close"
                        type="submit"
                        className="rounded-xl bg-linear-to-r from-pink-600 to-red-600"
                      >
                        Update Card
                      </Button>
                    </Modal.Footer>
                  </form>
                </Surface>
              </Modal.Body>
            </Modal.Dialog>
          </Modal.Container>
        </Modal.Backdrop>
      </Modal>
    </div>
  );
};

export default EditBloodCardModal;
