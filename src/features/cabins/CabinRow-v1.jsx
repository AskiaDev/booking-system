import styled from "styled-components";
import { formatCurrency } from "../../utils/helpers";
import CreateCabinForm from "./CreateCabinForm";
import { useDeleteCabin } from "./useDeleteCabin";
import { BsTrashFill } from "react-icons/bs";
import { BsPencilSquare } from "react-icons/bs";
import { BiDuplicate } from "react-icons/bi";
import { useCreateCabin } from "./useCreateCabin";
import Modal from "../../ui/Modal";
import ConfirmDelete from "../../ui/ConfirmDelete";
import Table from "../../ui/Table";
import Menus from "../../ui/Menus";
// const TableRow = styled.div`
//   display: grid;
//   grid-template-columns: 0.6fr 1.8fr 2.2fr 1fr 1fr 1fr;
//   column-gap: 2.4rem;
//   align-items: center;
//   padding: 1.4rem 2.4rem;

//   &:not(:last-child) {
//     border-bottom: 1px solid var(--color-grey-100);
//   }
// `;

const Img = styled.img`
  display: block;
  width: 6.4rem;
  aspect-ratio: 3 / 2;
  object-fit: cover;
  object-position: center;
  transform: scale(1.5) translateX(-7px);
`;

const Cabin = styled.div`
  font-size: 1.6rem;
  font-weight: 600;
  color: var(--color-grey-600);
  font-family: "Sono";
`;

const Price = styled.div`
  font-family: "Sono";
  font-weight: 600;
`;

const Discount = styled.div`
  font-family: "Sono";
  font-weight: 500;
  color: var(--color-green-700);
`;

const CabinRow = ({ cabin }) => {
  const {
    name,
    maxCapacity,
    image,
    regularPrice,
    discount,
    id: cabinId,
    description,
  } = cabin;

  const { deleteCabin } = useDeleteCabin();
  const { isCreating, createCabin } = useCreateCabin();

  const handleDuplicate = () => {
    createCabin({
      name: `Copy of ${name}`,
      maxCapacity,
      image,
      regularPrice,
      discount,
      description,
    });
  };

  return (
    <Table.Row>
      <Img src={image} alt={name} />
      <Cabin>{name}</Cabin>
      <div>{maxCapacity}</div>
      <Price>{formatCurrency(regularPrice)}</Price>
      {discount ? (
        <Discount>{formatCurrency(discount)}</Discount>
      ) : (
        <span>&mdash;</span>
      )}
      <div>
        <button onClick={handleDuplicate} disabled={isCreating}>
          <BiDuplicate />
        </button>

        <Modal>
          {/* edit */}

          <Modal.Open opens="edit">
            <button>
              <BsPencilSquare />
            </button>
          </Modal.Open>
          <Modal.Window name="edit">
            <CreateCabinForm cabinToEdit={cabin} />
          </Modal.Window>

          {/*  delete */}

          <Modal.Open opens="delete">
            <button>
              <BsTrashFill />
            </button>
          </Modal.Open>
          <Modal.Window name="delete">
            <ConfirmDelete
              resourceName="cabin"
              onConfirm={() => deleteCabin(cabinId)}
            >
              Delete
            </ConfirmDelete>
          </Modal.Window>
        </Modal>

        <Menus.Menu>
          <Menus.Toggle id={cabinId} />

          <Menus.List id={cabinId}>
            <Menus.Button onClick={handleDuplicate} icon={<BiDuplicate />}>
              Duplicate
            </Menus.Button>
            <Menus.Button icon={<BsPencilSquare />}>Edit</Menus.Button>
            <Menus.Button icon={<BsTrashFill />}>Delete</Menus.Button>
          </Menus.List>
        </Menus.Menu>
      </div>
    </Table.Row>
  );
};

export default CabinRow;
