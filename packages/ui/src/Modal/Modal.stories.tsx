import type { Meta, StoryObj } from "@storybook/react";

import { Modal } from "./Modal";
import { ModalProvider } from "./context/ModalContext";
import { useModal } from "./hooks/useModal";

const meta: Meta<typeof Modal> = {
  component: Modal,
};

export default meta;

type Story = StoryObj<typeof Modal>;

const ModalSample = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const modal = useModal();

  const onOpenModal = () => {
    modal.open({ type: "positive", title: "테스트 모달입니다.", onConfirm: () => alert("잘 실행되었네요!") });
  };

  return <button onClick={onOpenModal}>누르면 모달이 떠요</button>;
};

export const ButtonToModal: Story = {
  render: () => {
    return (
      <ModalProvider>
        <ModalSample />
      </ModalProvider>
    );
  },
};

export const Positive: Story = {
  args: {
    isOpen: true,
    onClose: () => {},
    props: {
      type: "positive",
      title: "테스트 모달입니다.",
      onConfirm: () => {},
    },
  },
  render: (args) => <Modal {...args} />,
};
