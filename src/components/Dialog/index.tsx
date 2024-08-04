import * as Dialog from "@radix-ui/react-dialog";
import { DialogContent, DialogOverlay } from "./style";
interface IModalProps {
    children: React.ReactNode;
    openModal: boolean;
    handleOpenModal: (isOpen: boolean) => void;
}

const ModalContainer = ({ openModal, handleOpenModal, children }: IModalProps) => (
    <Dialog.Root open={openModal} onOpenChange={handleOpenModal}>
        <Dialog.DialogPortal>
            <DialogOverlay />
            <DialogContent>{children}</DialogContent>
        </Dialog.DialogPortal>
    </Dialog.Root>
);

export default ModalContainer;
