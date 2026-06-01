"use client";

import { AlertDialog, Button } from "@heroui/react";
import { useRouter } from "next/navigation";
import { MdDeleteOutline } from "react-icons/md";
import { toast } from "react-toastify";

const DeleteBloodCardModal = ({ user }) => {
  const router = useRouter();
  const { id } = user;
  const handleDelete = async () => {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_SERVER_URL}/blood-cards/${id}`,
      {
        method: "DELETE",
      },
    );
    const result = await res.json();
    if (result.deletedCount > 0) {
      toast.success("Blood card deleted successfully!", {
        position: "top-center",
      });
      router.refresh();
    } else {
      toast.error("Failed to delete blood card. Please try again.", {
        position: "top-center",
      });
    }
  };

  return (
    <div>
      <AlertDialog>
        <Button className="h-11 px-5 font-bold text-white bg-linear-to-r from-pink-600 to-red-600 rounded-xl shadow-md transition-all active:scale-98 flex items-center gap-2">
          <MdDeleteOutline />
          Delete Blood Card
        </Button>
        <AlertDialog.Backdrop>
          <AlertDialog.Container>
            <AlertDialog.Dialog className="sm:max-w-100">
              <AlertDialog.CloseTrigger />
              <AlertDialog.Header>
                <AlertDialog.Icon status="danger" />
                <AlertDialog.Heading>
                  Delete Blood Donor Card?
                </AlertDialog.Heading>
              </AlertDialog.Header>
              <AlertDialog.Body>
                <p>
                  This will permanently remove your blood donor card and all
                  associated contact details from our public directory. This
                  action cannot be undone.
                </p>
              </AlertDialog.Body>
              <AlertDialog.Footer>
                <Button
                  slot="close"
                  variant="danger-soft"
                  className="rounded-xl"
                >
                  Cancel
                </Button>
                <Button
                  onClick={handleDelete}
                  slot="close"
                  variant="danger"
                  className="rounded-xl"
                >
                  Delete Blood Card
                </Button>
              </AlertDialog.Footer>
            </AlertDialog.Dialog>
          </AlertDialog.Container>
        </AlertDialog.Backdrop>
      </AlertDialog>
    </div>
  );
};

export default DeleteBloodCardModal;
