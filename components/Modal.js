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

export const LibraryModal = ({ isOpen, onClose, children }) => {
    return (
        <motion.div layout>
        <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent>
                <ModalHeader>
                    <ModalCloseButton />
                </ModalHeader>
                <motion.div layoutId="cardHeading">
                    <ModalBody>{children}</ModalBody>
                </motion.div>
                <ModalFooter>
                    <Button variantColor="blue" mr={3} onClick={onClose}>
                        Close
                    </Button>
                </ModalFooter>
            </ModalContent>
        </Modal>
        </motion.div>
    )
}

export default LibraryModal;