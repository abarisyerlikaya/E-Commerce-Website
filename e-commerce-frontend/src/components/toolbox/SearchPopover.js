/* eslint react/no-multi-comp: 0, react/prop-types: 0 */
import React, { useState } from 'react';
import { Popover, PopoverBody, Input, Button } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const SearchPopover = (props) => {
  const [popoverOpen, setPopoverOpen] = useState(false);

  const toggle = () => setPopoverOpen(!popoverOpen);

  return (
    <div>
      <FontAwesomeIcon icon={faSearch} id="Popover1"/>
      <Popover placement="bottom" isOpen={popoverOpen} target="Popover1" toggle={toggle}>
        <PopoverBody>
            <Input type="text" placeholder="Search products"></Input>
            <Button className="mt-2" id="search-button" block size="sm" color="primary">Search</Button>
        </PopoverBody>
      </Popover>
    </div>
  );
}

export default SearchPopover;