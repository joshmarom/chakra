import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Button,
} from '@chakra-ui/react'
import { motion } from "framer-motion";

export const LibraryModal = ({ isOpen, onClose, children, cardId }) => {
    return (
        <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent>
                <ModalHeader>
                    <ModalCloseButton />
                </ModalHeader>
                    <ModalBody>{children}</ModalBody>
                <ModalFooter>
                    <Button colorScheme={'pink'} mr={3} onClick={onClose}>
                        Close
                    </Button>
                </ModalFooter>
            </ModalContent>
        </Modal>
    )
}

export default LibraryModal;