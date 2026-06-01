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
import { useState } from "react";
import { FaPlus } from "react-icons/fa";
import { FiPlusCircle } from "react-icons/fi";
import { toast } from "react-toastify";

const AddBloodCardForm = ({ user }) => {
  const router = useRouter();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { id, image, name, email } = user;
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
    const finalData = {
      ...data,
      userId: id,
      userimage: image,
      userName: name,
      userEmail: email,
    };

    const res = await fetch(
      `${process.env.NEXT_PUBLIC_SERVER_URL}/blood-cards`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(finalData),
      },
    );
    const result = await res.json();
    console.log("Add Blood Card Result:", result);
    if (result.insertedId) {
      toast.success("Blood card added successfully!");
      setIsModalOpen(false);
      router.refresh();
    }
  };

  return (
    <div>
      <Modal isOpen={isModalOpen} onOpenChange={setIsModalOpen}>
        <Button
          onClick={() => setIsModalOpen(true)}
          className="h-11 px-6 font-bold text-white bg-linear-to-r from-pink-600 to-red-600 rounded-xl shadow-md hover:opacity-95 transition-all active:scale-98 flex items-center gap-2"
        >
          <FiPlusCircle className="size-4" />
          Add Blood Card
        </Button>
        <Modal.Backdrop>
          <Modal.Container placement="auto">
            <Modal.Dialog className="sm:max-w-md">
              <Modal.CloseTrigger />
              <Modal.Header>
                <Modal.Icon className="bg-red-200">
                  <FaPlus className="text-red-600" />
                </Modal.Icon>
                <Modal.Heading>Add Your Blood Card</Modal.Heading>
                <p className="mt-1.5 text-sm leading-5 text-muted">
                  Provide your blood group and contact details to register as a
                  donor. Your information can help save a life in an emergency.
                </p>
              </Modal.Header>
              <Modal.Body className="p-6">
                <Surface variant="default">
                  <form onSubmit={onSubmit} className="flex flex-col gap-4">
                    {/* Blood Group */}
                    <TextField
                      isRequired
                      className="w-full"
                      type="text"
                      variant="secondary"
                    >
                      <Select
                        name="bloodGroup"
                        isRequired
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
                      isRequired
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
                      isRequired
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
                      isRequired
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
                        // slot="close"
                        type="submit"
                        className="rounded-xl bg-linear-to-r from-pink-600 to-red-600"
                      >
                        Add Card
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

export default AddBloodCardForm;
