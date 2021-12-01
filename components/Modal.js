import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Button,
    Flex,
} from '@chakra-ui/react'
import { motion } from "framer-motion";

export const LibraryModal = ({ isOpen, onClose, children, heading, cardId }) => {
    return (
        <Modal size="full" isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent>
                <ModalHeader>
                    {heading}
                    <ModalCloseButton />
                </ModalHeader>
                <ModalBody as={Flex} position="relative">
                    {children}
                </ModalBody>
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