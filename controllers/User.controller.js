import express from 'express';
import User from '../models/user.model';

export const testUser = (req, res) => {
  return res.json({'success': true, 'message': 'User route works'});
}
