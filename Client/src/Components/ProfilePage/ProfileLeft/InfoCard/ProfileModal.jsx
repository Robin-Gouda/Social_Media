import { useDisclosure } from "@mantine/hooks";
import { Modal } from "@mantine/core";

function ProfileModal({ modalOpened, setModalOpened }) {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <>
      <Modal
        opened={modalOpened}
        onClose={() => setModalOpened(false)}
        // title="Authentication"
        overlayProps={{
          backgroundOpacity: 0.55,
          blur: 3,
        }}
        size="55%"
      >
        <form action="" className="infoForm">
          <h3>Your Info</h3>
          <div>
            <input
              className="infoInput"
              name="FirstName"
              placeholder="First Name"
            ></input>
            <input
              className="infoInput"
              name="LastName"
              placeholder="Last Name"
            ></input>
          </div>
          <div>
            <input
              className="infoInput"
              name="worksAT"
              placeholder="Works at"
            ></input>
          </div>

          <div>
            <input
              className="infoInput"
              name="Country"
              placeholder="Country"
            ></input>
            <input
              className="infoInput"
              name=""
              placeholder="Last Name"
            ></input>
          </div>

          <div>
            <input
              type="text"
              className="infoInput"
              placeholder="RelationShip Status"
            />
          </div>

          <div>
            Profile Image
            <input type="file" name="profileImg" />
            Cover Image
            <input type="file" name="coverImg" />
          </div>

          <button className="button infoButton">Update</button>
        </form>
      </Modal>
    </>
  );
}

export default ProfileModal;
