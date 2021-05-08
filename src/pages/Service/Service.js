import React from 'react';

export default function Service({ match }) {
  return <div>{match.params.service_id}</div>;
}
