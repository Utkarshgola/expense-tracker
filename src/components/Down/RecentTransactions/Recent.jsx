import React from "react";
import styles from "./Recent.module.css";
import ListItem from "./ListItem/ListItem";
import Pagination from '@mui/material/Pagination';
import PaginationItem from '@mui/material/PaginationItem';
import Stack from '@mui/material/Stack';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

function Recent() {
  let items = ["Samosa", "Movie", "Auto"];
  let itemsDate = ["March 20, 2024", "March 21, 2024", "March 22, 2024"];
  let itemsPrice =["150","300","50"];
  let itemIcons =[]

  return (
    <div className={styles.maincontainer}>
      <div>
        <p className={styles.heading}>Recent Transactions</p>
      </div>
      <div className={styles.container}>
        <div className={styles.list}>
          {[0,1,2].map((e=>(
            <ListItem key={e} item={items[e]} date={itemsDate[e]} price={itemsPrice[e]} idx={e} />
          )))}
          
        </div>
        <div className={styles.pagination}>
        <Stack spacing={2}>
      <Pagination
        count={1}
        color="primary"
        renderItem={(item) => (
          <PaginationItem
            slots={{ previous: ArrowBackIcon, next: ArrowForwardIcon }}
            {...item }
            
          />
        )}
      />
    </Stack>
        </div>
      </div>
    </div>
  );
}

export default Recent;
