"use client";

import { authClient } from "@/lib/auth-client";
import { Button, Input, Label, Modal, Surface, TextField } from "@heroui/react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useRef, useState } from "react";
import { FiEdit3 } from "react-icons/fi";
import { toast } from "react-toastify";
const EditProfileModal = ({ user }) => {
  const router = useRouter();
  const fileInputRef = useRef(null);
  const [imagePreview, setImagePreview] = useState("");
  const [selectedImage, setSelectedImage] = useState(null);

  const onSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const userData = Object.fromEntries(formData.entries());
    try {
      let imageUrlForDatabase = undefined;
      if (selectedImage) {
        const imageFormData = new FormData();
        imageFormData.append("image", selectedImage);
        const imagebbApiKey = process.env.NEXT_PUBLIC_IMAGEBB_API_KEY;
        const imagebbRes = await fetch(
          `https://api.imgbb.com/1/upload?key=${imagebbApiKey}`,
          {
            method: "POST",
            body: imageFormData,
          },
        );
        const imagebbData = await imagebbRes.json();
        imageUrlForDatabase = imagebbData.data.url;
      }
      await authClient.updateUser(
        {
          name: userData.name,
          image: imageUrlForDatabase,
        },
        {
          onSuccess: () => {
            toast.success("Profile updated successfully!", {
              position: "top-center",
            });
            router.refresh();
          },
          onError: (error) => {
            toast.error("Profile update failed: " + error.message, {
              position: "top-center",
            });
          },
        },
      );
    } catch (error) {
      toast.error("Registration failed: " + error.message);
    }
  };

  const handleBtnPress = () => {
    fileInputRef.current?.click();
  };
  const handleFileChange = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      setSelectedImage(file);
      const previewUrl = URL.createObjectURL(file);
      setImagePreview(previewUrl);
    }
  };

  const handlePasswordReset = () => {
    toast.error(
      "This feature is currently unavailable. Please contact 'salmansahedbd@gmail.com' to reset your password.",
      {
        position: "top-center",
        autoClose: 20000,
      },
    );
  };
  return (
    <div>
      <Modal>
        <Button className="h-11 px-5 font-bold rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 hover:bg-zinc-50 dark:hover:bg-zinc-800 text-zinc-700 dark:text-zinc-300 shadow-xs transition-all active:scale-98">
          <FiEdit3 className="text-indigo-500" />
          Edit Profile
        </Button>
        <Modal.Backdrop>
          <Modal.Container placement="auto">
            <Modal.Dialog className="sm:max-w-md">
              <Modal.CloseTrigger />
              <Modal.Header>
                <Modal.Icon className="bg-accent-soft text-accent-soft-foreground">
                  <FiEdit3 className="text-indigo-500" />
                </Modal.Icon>
                <Modal.Heading>Edit Your Profile</Modal.Heading>
                <p className="mt-1.5 text-sm leading-5 text-muted">
                  Update your personal and donor details below.
                </p>
              </Modal.Header>
              <Modal.Body className="p-6">
                <Surface variant="default">
                  <form onSubmit={onSubmit} className="flex flex-col gap-4">
                    {/* Name Field */}
                    <TextField
                      defaultValue={user?.name}
                      className="w-full"
                      name="name"
                      type="text"
                      variant="secondary"
                    >
                      <Label>Name</Label>
                      <Input placeholder="Enter your name" />
                    </TextField>

                    {/* Photo Field */}
                    <TextField className="w-full flex flex-col gap-1.5">
                      <Label className="text-sm font-semibold text-zinc-700 dark:text-zinc-300">
                        Profile Image
                      </Label>
                      <input
                        type="file"
                        accept="image/*"
                        ref={fileInputRef}
                        onChange={handleFileChange}
                        className="hidden"
                      />

                      <div className="flex items-center gap-3 w-full p-2 border border-zinc-200 dark:border-zinc-800 rounded-xl bg-zinc-50/50 dark:bg-zinc-950/50">
                        <Button
                          variant="outline"
                          className="bg-indigo-600/10 text-indigo-600 dark:text-indigo-400 border border-indigo-500/20 rounded-lg text-xs font-medium py-1.5 px-3 h-9"
                          onPress={handleBtnPress}
                        >
                          {selectedImage ? "Change Photo" : "Choose File"}
                        </Button>
                        <span className="text-xs text-zinc-400 dark:text-zinc-500 truncate max-w-55">
                          {selectedImage
                            ? selectedImage.name
                            : "No file chosen"}
                        </span>
                      </div>
                      {/* Image Preview */}
                      {imagePreview && (
                        <div className="mt-2 relative w-20 h-20 border border-zinc-200 dark:border-zinc-800 rounded-xl overflow-hidden bg-zinc-100 dark:bg-zinc-950 flex items-center justify-center">
                          <Image
                            src={imagePreview}
                            alt="Preview"
                            width={80}
                            height={80}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      )}
                    </TextField>
                    <TextField>
                      <h1
                        onClick={handlePasswordReset}
                        className="text-blue-600 underline underline-offset-2 cursor-pointer select-none"
                      >
                        Reset Password?
                      </h1>
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
                        className="bg-linear-to-r from-pink-600 to-red-600 text-white rounded-xl"
                      >
                        Save Changes
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

export default EditProfileModal;
