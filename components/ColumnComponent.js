import React from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import Column from './Column';

export default function ColumnComponent(props) {
  const {
    data,
  } = props;
  const columns = data.length;
  return (
    <Grid>
      <Row style={{ maxWidth: '960px', margin: 'auto', marginTop: '70px' }} xs={12}>
        {data.map(datum => (
          <Col
            style={{
              padding: '0', marginBottom: '10px', display: 'flex', alignItems: 'baseline', justifyContent: 'flex-start',
            }}
            xs={12}
            md={12}
            lg={12 / columns}
            key={data.src || datum.name || datum.content}
          >
            <Column
              height={960 / columns - 10}
              width={960 / columns - 10}
              src={datum.src || ''}
              overlaySrc={datum.overlaySrc || ''}
              name={datum.name || ''}
              surname={datum.surname || ''}
              content={datum.content}
            />
          </Col>
        ))}
      </Row>
    </Grid>
  );
}
